import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
  

export default function Page(){
  
    return(
      <div >
        <Dialog>
          <div className=" gap-7 box-content">
        <DialogTrigger asChild><div className=" p-10 rounded-md items-center 
              flex flex-col border-2 border-dashed cursor-pointer hover:shadow-md"> 
              <h2>+</h2>
              <p>Add Your Expences</p>
          </div></DialogTrigger>
        </div>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Enter About Your Expences</DialogTitle>
            <DialogDescription>
             <Input />
            </DialogDescription>
            <DialogTitle>Enter Your Amount</DialogTitle>
            <DialogDescription>
             <Input />
             <div  className="pt-3">
             <Button>Submit</Button>
             </div>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
      </div>
    )
}
