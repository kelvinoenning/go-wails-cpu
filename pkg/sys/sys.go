package sys

import (
	"time"

	"github.com/shirou/gopsutil/cpu"
	"github.com/shirou/gopsutil/mem"
	"github.com/wailsapp/wails"
)

type Stats struct {
	log *wails.CustomLogger
}

type Machine struct {
	CPUPercent int `json:"cpuPercent"`
	MemPercent int `json:"memPercent"`
}

func (s *Stats) WailsInit(runtime *wails.Runtime) error {
	s.log = runtime.Log.New("Stats")

	go func() {
		for {
			runtime.Events.Emit("spy_machine", s.GetMachine())
			time.Sleep(time.Second)
		}
	}()

	return nil
}

func (s *Stats) GetMachine() *Machine {
	percents, err := cpu.Percent(time.Second, false)
	if err != nil {
		s.log.Errorf("unablel to get cpu stats: %s", err.Error())
		return nil
	}

	v, err := mem.VirtualMemory()
	if err != nil {
		s.log.Errorf("unablel to get mem stats: %s", err.Error())
		return nil
	}

	return &Machine{
		CPUPercent: int(percents[0]),
		MemPercent: int(v.UsedPercent),
	}
}
