import { useState } from 'react'


const useList = (initialValue = []) => {
    const [list, setList] = useState(initialValue);

    //Pushes a new value to the list
    const push = (value) => {
        setList([...list, value]);
    }

    //Removes an item from the list by index
    const remove = (index) => {
        setList(list.filter((_, i) => i !== index));
    }

    //Clears the list
    const clear = () => {
        setList([]);
    }

    //Checks if the list is empty
    const isEmpty = () => {
        return list.length === 0;
    }

    //sort list
    const sort = () => {
        setList([...list.sort()]);
    }

    //invert list
    const invert = () => {
        setList([...list.reverse()]);
    }

    //TODO develop more funcvions for the list


    return [list, setList, push, remove, clear, isEmpty, sort, invert];
}

export default useList;

