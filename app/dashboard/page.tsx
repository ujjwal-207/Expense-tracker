import Sidebar from "@/components/sidebar";
import ThemeSwitch from "@/components/ThemeSwitch";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
const cardDetails =[{
    title:"Saving",
    href :"/saving",
    },
    {
        title:"Expences",
        href:"/expences"
    },
    {
        title:"Income",
        href:"/income",
    },
    
]

export default function Page() {
    return (
        <div className="flex">
            <div>
                <Sidebar />
            </div>
            <div className="grid grid-cols-2 xl:grid-cols-4 gap-4 tracking-tight mt-2">
            
                {cardDetails.map((details,index)=>(
                    <Card key={index}>
                    <CardHeader className="px-4 pt-3 pb-2 xl:py-4 xl:px-6 font-normal" >
                        <CardTitle>{details.title}</CardTitle>
                    </CardHeader>
                </Card>
                ))}

                
            </div>

        </div>

    )
}