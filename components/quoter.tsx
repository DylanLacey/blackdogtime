import { promises as fs } from 'fs';

type Quote = {
    quote: String,
    author: String,
    source?: String
}
export async function Quoter({userStyles = ""}: { userStyles: string}) {
    const quotedata = await fs.readFile(process.cwd() + '/public/static_data/quotes.json', 'utf8');
    const quotes: Array<Quote> = JSON.parse(quotedata)

    const selected_quote = quotes[Math.floor(Math.random() * quotes.length)]
    
    return (
        <div id="quote" className={"flex flex-wrap text-lg italic grow" + userStyles}>
            <p className="flex-row basis-full">
                {selected_quote.quote}
                <span className="text-raisin-300 pl-4">  --- ({selected_quote.author})</span>
            </p>
        </div>
    )
}