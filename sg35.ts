//%color=#444444 icon="\uf07b"
namespace SG35 {

    let initialized = false
    let onReceivedDataHandler: (pm1: number, pm25: number, pm10: number) => void;

    //%shim=sg35::begin
    function begin(): void {
        return
    }

    //%shim=sg35::read
    export function read(): boolean {
        return true
    }


    //%shim=sg35::pm1
    export function pm1(): number {
        return 1
    }


    //%shim=sg35::pm25
    export function pm25(): number {
        return 1
    }


    //%shim=sg35::pm10
    export function pm10(): number {
        return 1
    }
	
	//%shim=sg35::turnPowerSavingModeOn
    //%block="SG35 sleep"
	export function sleepSG35(): void{
		return;
	}
	
	//%shim=sg35::wakeUpSG35
    //%block="SG35 wake up"
	export function wakeSG35(): void{
		return;
	}

    //%shim=sg35::onDataReceived
    function onDataReceived(body: Action): void {
        return;
    }

    function init() {

        startParallel(function(){
                while(true)
                {
                    let rcv = read()
                    if(rcv)
                    {
                        onReceivedDataHandler(pm1(), pm25(), pm10())
                    }
                    basic.pause(1)
                }
        })
    }

    //% block="SG35 on received "
    //% draggableParameters=reporter
    export function onReceivedData(cb: (receivedPM1: number,receivedPM25: number,receivedPM10: number) => void): void {
        init()
        onReceivedDataHandler = cb
    }

    //% shim=parall::startParallel
    export function startParallel(u: () => void) {
        return 1;
    }

    begin()
}