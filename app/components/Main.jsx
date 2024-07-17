'use client';
import React, { useEffect, useContext } from 'react'
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebaseConfig';
import { useState } from 'react';
import CardContainer from './CardContainer';
import FilterContext from "../context/filterContext";


const Main = () => {

    const collections = ['Armed_Forces', 'Artist', 'Aviate', 'Chartered_Accountant', 'Civil_Services', 'Design', 'Engineering', 'Hotel_Management', 'Law', 'Medical', 'Research', 'Sports', 'Teacher'];

    const names = ['Armed Forces', 'Artist', 'Aviatation', 'Chartered Accountant', 'Civil Services', 'Design', 'Engineering', 'Hotel Management', 'Law', 'Medical', 'Research', 'Sports', 'Teaching'];

    const [occupations, setOccupations] = useState([])
    var temp = [];

    const context = useContext(FilterContext)
    const { filters } = context;
    const { Sector, Subjects, Time_Devotion, Work_Mode } = filters;

    useEffect(() => {
        ; (async () => {
            collections.map(async (c) => {
                const colRef = collection(db, c);
                const snapshots = await getDocs(colRef);
                const docs = snapshots.docs.map(doc => doc.data())
                temp.push(docs);
                var temp2 = []
                for (let i = 0; i < temp.length; i++) {
                    if (i % 2 == 0) temp2.push(temp[i]);
                }
                setOccupations(temp2);
            })
        })()
    }, [])


    const applyCards = (occ, sector) => {
        let flag = false;
        if(Subjects.length == 0 || occ.Subjects?.length == 0){
            flag = true;
        }

        Subjects.map((s)=>{
            occ.Subjects?.map((sub) =>{
            
                if(sub == s.value || sub == (s.value+" ")){
                    flag = true;
                }
            })
            occ["Subjects "]?.map((sub) =>{
                
                    if(sub == s.value || sub == (s.value+" ")){
                        flag = true;
                    }
                })
        })

        if ((occ.Sector == sector || sector == 2 || occ.Sector == 2) && (occ.Time_Devotion == Time_Devotion || Time_Devotion == 3 || occ.Time_Devotion == 3) && (occ.Work_Mode == Work_Mode || Work_Mode == 3 || occ.Work_Mode == 3) && flag) {
            return (<>
                <CardContainer title={occ.Branch} desc={occ.Desc} roadmap={occ.Roadmap} html={occ.html}/>
            </>)
        }
    }

    let i = 0;

    return (
        <div className='pt-6 w-1/2 ml-72 top'>
            <div className='justify-center items-center'>
                {
                    occupations.map((occupation) => {
                        return (
                            <section id={collections[i]}>
                                <h1 className='font-black text-black mt-5 mb-2 text-3xl'>{names[i++]}</h1>
                                <div className='flex flex-wrap'>
                                    {occupation.map((occ) => {
                                        return (
                                            <>
                                                {applyCards(occ, Sector)}              
                                            </>
                                        )

                                    })}
                                </div>
                            </section>
                        )
                    })
                }

            </div>
        </div>
    )
}

export default Main