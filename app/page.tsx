import { Quoter } from "@/components/quoter"
import { SomethingTo } from "@/components/something_to";
import { Todo }  from "@/components/todo"

const Page = () => {
    return (
        <main className="col-span-full flex text-lg mr-4">
            <div>
                <p>Clinical depression is terrible.</p>
                <br/>
                <p>
                    Even with medication, some days are awash with the paradoxically aching inability to feel. 
                    We built Blackdogti.me for those days: free, silly little companion site featuring things which have helped 
                    the developers when they're having their own crappy time.
                </p>
                <br/>
                <p>
                    When you're having an "off" day, we encourage you to pootle around here and try some of the suggestions.
                </p>
                <br />
                <p>
                    This isn't a therapy; there's no scientific backing or medical advice herein.  
                    Blackdogti.me is just here to sit quietly with you when you're feeling sad, depressed, and generally having a bad brain time.
                </p>
                <br/>
                <p className="italic font-bold">(If you are experiencing suicidal thoughts please seek immediate medical treatment)</p>
            </div>
            {/* <div className="bg-raisin-100 p-8 rounded-lg w-1/3">
                <SomethingTo name= "Read" >
                  DDD
                </SomethingTo>
            </div> */}
        </main>
    )
}

export default Page;