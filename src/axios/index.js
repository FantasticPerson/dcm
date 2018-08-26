import Jsonp from 'jsonp'
import axios from 'axios'
import {Modal} from 'antd'
import Utils from '../utils/utils'

export default class Axios{
    static jsonp(options){
        return new Promise((resolve,reject)=>{
            Jsonp(options.url,{
                params:'callback'
            },function(err,response){
                if(response.status == 'success'){
                    resolve(response.results)
                } else{
                    reject(response.error)
                }
            })
        })
    }

    static requestList(_this,url,params){
        var data = {
            params:params
        }
        this.ajax({
            url,
            data
        }).then((res)=>{
            if(res && res.result){
                let list = res.result.item_list.map((item,index)=>{
                    item.key = index
                    return item
                })
                _this.setState({list:list,pagination:Utils.pagination(res,(current)=>{
                    _this.params.page = current
                    _this.requestList()
                })})
            }
        })
    }

    static ajax(options){
        let loading
        if(options.data && options.data.isShowLoading !== false){
            loading = document.getElementById('ajaxLoading')
            loading.style.display="block"
        }
        let baseUrl = 'https://www.easy-mock.com/mock/5b798f78bcb2ab748b0c256b/table'
        return new Promise((resolve,reject)=>{
            axios({
                url:options.url,
                method:'get',
                baseURL:baseUrl,
                timeout:5000,
                params:(options.data && options.data.params || '')
            }).then((res)=>{
                if(options.data && options.data.isShowLoading !== false){
                    loading = document.getElementById('ajaxLoading')
                    loading.style.display="none"
                }
                if(res.status == '200'){
                    let response = res.data
                    if(response.code == '0'){
                        if(response.result.list){
                            response.result.list.map((item,index)=>item.key=index)
                        }
                        resolve(response)
                    } else {
                        Modal.info({
                            title:'提示',
                            content:response.msg
                        })
                    }
                } else {
                    reject(res.data)
                }
            })
        });
    }
}