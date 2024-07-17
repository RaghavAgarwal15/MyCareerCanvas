'use client'
import React, { useState, useEffect } from 'react'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card"
import Link from 'next/link'
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebaseConfig';

const QuestionsContainer = () => {
  const [questions, setQuestions] = useState([])
  var temp = [];

  useEffect(() => {
    ; (async () => {
      const colRef = collection(db, 'Discussion');
      const snapshots = await getDocs(colRef);
      var docs = []
      for (let i = 0; i < snapshots.docs.length; i++) {
        docs.push([snapshots.docs[i].id, snapshots.docs[i].data()])
      }

      temp.push(docs);
      var temp2 = []
      for (let i = 0; i < temp.length; i++) {
        if (i % 2 == 0) temp2.push(temp[i]);
      }
      setQuestions(temp2[0]);
    })()
  }, [])


  return (
    questions.map((question) => {
      return (
        <div className='w-4/5 mx-auto'>
          <Link className='hover:no-underline' href={`/discussion/${question[0]}`}>
            <Card className='m-2 flex flex-col justify-between hover:bg-gray-100 '>
              <CardHeader className='pt-4 pb-2'>
                <CardTitle className='text-lg'>{question[1].Topic}</CardTitle>
              </CardHeader>
              <CardContent className='pb-2'>
                <p className='text-xs text-gray-600'>{question[1].Desc}</p>
              </CardContent>
              <CardFooter className="align-bottom justify-end text-xs pb-3">
                {question[1].Creator} | Created at(YYYY:MM:DD) : {question[1].Timestamp}
              </CardFooter>
            </Card>
          </Link>
        </div>
      )
    })
  )
}

export default QuestionsContainer