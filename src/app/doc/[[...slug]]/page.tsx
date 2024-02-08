export default function Doc({params}:{
    params :{ slug : string[] }
}){
    if(params?.slug?.length === 2){
        return <h1>View Doc with two params {params.slug[0]} and {params.slug[1]}</h1>;
    }else if(params?.slug?.length === 1){
        return <h1>View Doc with onne params {params.slug[0]}</h1>;
    }
    return <h1>Welcome to Doc Page</h1>;
}