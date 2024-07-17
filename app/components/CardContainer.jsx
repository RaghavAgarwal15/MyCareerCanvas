import React from 'react'
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "../components/ui/card"
import { Button } from '../components/ui/button'
import Link from 'next/link'

const CardConatiner = (props) => {
    {localStorage.setItem(props.title, props.html)}
  return (
    <Card className='w-72 m-2 flex flex-col justify-between'>
            <CardHeader>
                <CardTitle>{props.title}</CardTitle>
            </CardHeader>
            <CardContent>
                <p className='text-sm'>{props.desc}</p>
            </CardContent>
            <CardFooter className = "align-bottom">
                <Link href={`/roadmap/${props.title}`}><Button>View</Button></Link>
            </CardFooter>
        </Card>
  )
}

export default CardConatiner