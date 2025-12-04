type user1={
    name: string;
    id: number;
    
}

type result1= "name"|"id";
type user3 = keyof user1;
