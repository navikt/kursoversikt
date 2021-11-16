import React,{createContext, useEffect, useState} from "react";
import {Kurs} from "../models/Kurs";
import {hentAlleKurs} from "../api/kursAPI";

export interface KursKontext {
    aktiveKurs: Kurs[],
    alleKurs: Kurs[],
    kursLaster:boolean
}


export const KursListeContext = createContext<KursKontext>({aktiveKurs: [], alleKurs: [], kursLaster:true})

export const KursProvider = (props: any) => {
    const [kursKontext, setkursKontext] = useState<KursKontext>({aktiveKurs: [], alleKurs: [], kursLaster:true})
    useEffect(() => {
            hentAlleKurs().then(alleKurs => {
                setkursKontext({aktiveKurs: alleKurs, alleKurs: alleKurs.filter(kurs =>
                        kurs.aktivt === 1

                    ),kursLaster:false
                })
                }
            )
        }
    )
    return <KursListeContext.Provider value={kursKontext}>
        {props.children}
    </KursListeContext.Provider>
}