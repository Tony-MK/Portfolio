import Link from 'next/link';

function submitForm(){

}

export default function Contact(){
    <main>
        <form>
            <div>
                <label for="name"> Name </label>
                <input required placeholder="John Doe"></input>
            </div>
            <div>
                <label for="email"> Email </label>
                <input required placeholder="johndoe@gmail.com"></input>
            </div>
            <div>
                <label for="message"> Message </label>
                <input required placeholder="Hey Antony, I would to contact you regrading ..."></input>
            </div>
            <div>
                <label for="name"> Name </label>
                <input required type='button' onSubmit={submitForm()}>Submit</input>
            </div>
        </form>
    </main>

}