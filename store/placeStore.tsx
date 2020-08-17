/*
import {decorate, observable, action} from 'mobx'
import apiRepository from './apiRepository'

class PlaceStore{

    @observable
    placeList=[
        {name:"우리가 참김치"},
        {name:"나주곰탕"},
        {name:"피자스쿨"},
        {name:"온돌"},
    ]

    @action
    getPlaces(){
        this.placeList = apiRepository.getPlaces()
    }
}

export default new PlaceStore()
*/