import Link from 'next/link';

function submitForm(){

}

export default function Contact(){
    return (
        <main>
            <form>
                <div>
                    <label for="name"> Name </label>
                    <input required type="text" placeholder="John Doe"/>
                </div>
                <div>
                    <label for="email"> Email </label>
                    <input required type="email" placeholder="johndoe@gmail.com"/>
                </div>
                <div>
                    <label for="message"> Message </label>
                    <textarea required placeholder="Hey Antony, I would to contact you regrading ..."/>
                </div>
                <div>
                    <input type='button' onSubmit={submitForm()} value="Submit" />
                </div>
            </form>
        </main>
    )
}