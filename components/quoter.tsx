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
        <div id="quote" className={"flex text-lg italic grow text- " + userStyles}>
            <p className="flex flex-col">
                {selected_quote.quote}
                <span className="text-raisin-300 text-right whitespace-nowrap">  --- ({selected_quote.author})</span>
            </p>
        </div>
    )
}