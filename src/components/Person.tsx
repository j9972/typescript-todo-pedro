import {FC, ChangeEvent ,useState} from 'react'

export enum HairColor {
    Blonde = 'your hair is blonde', 
    Brown = 'cool hair',
    Pink = "awesome",
}

interface Props {
    name?: string;
    age?: number;
    email?: string;
    hairColor: HairColor; 
    // getName?: (name : string) => string; -> 이런식으로 props를 통해 func도 전달 가능
}

export const Person : FC <Props>= ({name,email,age, hairColor}) => {

    const [country, setCountry] = useState<string | null>("") // null을 default 값으로 하려면 union type 사용하기


    const handleChange = (event: React.ChangeEvent<HTMLInputElement> ) => {
        setCountry(event.target.value)
    }

    return (
        <div>
            <h1>{name}</h1>
            <h1>{email}</h1>
            <h1>{age}</h1>
            <input placeholder="write" onChange={handleChange} />

            {country}
            {hairColor}
        </div>
    );
}


