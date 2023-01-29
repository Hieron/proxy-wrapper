
class ProxyWrapper {

    constructor(target: { [key: string ]: any, default?: any }){

        return new Proxy(target, {
            get(target, property: string){

                const propertyList = property.split('.')
                let temp: any = target

                for(let i = 0; i < propertyList.length; i++){

                    if(typeof(temp) !== 'object' || !temp.hasOwnProperty(propertyList[i])){
                        temp = target.default
                        break
                    }

                    temp = temp[propertyList[i]]

                }

                return temp

            },
            set(target, property: string, value: any){

                const propertyList = property.split('.')
                let temp: any = target

                for(let i = 0; i < propertyList.length; i++){

                    if(i === propertyList.length - 1){
                        temp[propertyList[i]] = value
                        break
                    }

                    if(typeof(temp[propertyList[i]]) !== 'object'){
                        temp[propertyList[i]] = {}
                    }

                    temp = temp[propertyList[i]]

                }

                return true

            },
            has(target, property: string){

                const propertyList = property.split('.')
                let temp: any = target

                for(let i = 0; i < propertyList.length; i++){

                    if(typeof(temp) !== 'object' || !temp.hasOwnProperty(propertyList[i])){
                        return false
                    }

                    temp = temp[propertyList[i]]

                }

                return true

            },
            deleteProperty(target, property: string){

                const propertyList = property.split('.')
                let temp = target

                for(let i = 0; i < propertyList.length; i++){

                    if(typeof(temp) !== 'object' || !temp.hasOwnProperty(propertyList[i])){
                        break
                    }

                    if(i === propertyList.length - 1){
                        delete temp[propertyList[i]]
                        return true
                    }

                    temp = temp[propertyList[i]]

                }

                return false

            }
        })

    }

}

export default ProxyWrapper