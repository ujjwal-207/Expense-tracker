import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
  

export default function Page(){
    return(
      <div >
        <Dialog>
          <div className=" gap-7 box-content">
        <DialogTrigger>Enter Your Income</DialogTrigger>
        </div>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Enter Your Income</DialogTitle>
            <DialogDescription>
             <div>
                <input  type="email"
                    id="UserEmail"
                    className="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"></input>
             </div>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
      </div>
      
        
    )
}
