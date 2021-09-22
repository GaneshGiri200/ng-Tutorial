export const employee=[
	{id:101, name:"Ganesh", contact:369369369, gender:"male", address:"pune", post:"Mean stack"},
    {id:102, name:"Vishal", contact:367868369, gender:"male", address:"mumbai", post:"Mern stack"},
    {id:103, name:"Shruti", contact:8993030369, gender:"female", address:"solapur", post:"Full stack"},
    {id:104, name:"Prachi", contact:999999969, gender:"female", address:"kolhapur", post:"PHP stack"},
    {id:105, name:"Nilesh", contact:8494940369, gender:"male", address:"akola", post:"Lamp stack"}
]

export const RegName:string ="[A-Za-z]{4,30}";
export const RegPassword:string ="(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$";
export const RegContact:string ="([0-9]{10,12})";
export const RegEmail:string ="([A-Za-z0-9_\-\.])+\@([A-Za-z_\-\.]{5})+\.([A-Za-z]{2,4})";

export const empAPI:string = "http://localhost:3000/employee";

export const base_url="http://localhost:3000/";
