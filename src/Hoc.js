import { useEffect,useState } from "react"
const hocFunc = (Comp)=>{
    const WrapperComp = (props)=>{
        const [fetchData,setFetchData] = useState(null)
        useEffect(()=>{
            const timeOut = setTimeout(()=>{
                setFetchData([{
                    id: "1",
                    userName: "salim",
                    age: 36
                }])
            },1000)
            return ()=>clearTimeout(timeOut)
        },[])
        return (
            <Comp {...props} fetchData={fetchData}/>
        )

    }
    return WrapperComp
}

const TestComp = ({fetchData,...props})=>{
    return (
        <>
            {
                fetchData?.map((el)=>{
                    return <div key={el.id}>
                        <div>{el.userName}</div>
                        <div>{el.age}</div>
                    </div>
                })
            }
        </>
        
    )
}
const RenderPropsFunc = ({children,...props})=>{
    const [fetchData,setFetchData] = useState(null)
        useEffect(()=>{
            const timeOut = setTimeout(()=>{
                setFetchData([{
                    id: "1",
                    userName: "salim",
                    age: 36
                }])
            },1000)
            return ()=>clearTimeout(timeOut)
        },[])
        return children({fetchData,...props})
}
export const RenderProps = (props)=>{
    
    return <RenderPropsFunc {...props}>
        {
            ({fetchData,...props})=>{
        
            return (
                <>
                    {
                        fetchData?.map((el)=>{
                            return <div key={el.id}>
                                <div>{el.userName}</div>
                                <div>{el.age}</div>
                            </div>
                        })
                    }
                </>
                
            )}
        }
    </RenderPropsFunc>
}

const useCustomFetchHook = ()=>{
    const [fetchData,setFetchData] = useState(null)
    useEffect(()=>{
        const timeOut = setTimeout(()=>{
            setFetchData([{
                id: "1",
                userName: "salim",
                age: 36
            }])
        },1000)
        return ()=>clearTimeout(timeOut)
    },[])
    return {
        fetchData
    }
}
export const UseHook = ()=>{
    const {fetchData} = useCustomFetchHook()
    return (
        <>
            {
                fetchData?.map((el)=>{
                    return <div key={el.id}>
                        <div>{el.userName}</div>
                        <div>{el.age}</div>
                    </div>
                })
            }
        </>
        
    )
}

export const Hoc =  hocFunc(TestComp)