import React from 'react';

import '../styles/SortButton.css';

import { useHeights, useHeightsUpdate } from '../context/HeightsContext';
import { Button } from 'react-bootstrap';

import BubbleSort from '../algorithms/BubbleSort';
import QuickSort from '../algorithms/QuickSort';
import MergeSort from '../algorithms/MergeSort';
import RadixSort from '../algorithms/RadixSort';
import InsertionSort from '../algorithms/InsertionSort';
import SelectionSort from '../algorithms/SelectionSort';

const SortButton = () => {
    
    const heights = useHeights();
    const modifyHeights = useHeightsUpdate();

    let sorted;

    const sortHeights = () => {

        const selected = document.getElementById('picker').value;
        
        const sortbutton = document.getElementById('sort');
        const randomizebutton = document.getElementById('randomize');

        sortbutton.disabled = true;
        randomizebutton.disabled = true;

        switch (selected) {
            case 'Bubble sort':
                sorted = BubbleSort(heights);
                break;
            case 'Quicksort':
                sorted = QuickSort(heights);
                break;
            case 'Merge sort':
                sorted = MergeSort(heights);
                break;
            case 'Radix sort':
                sorted = RadixSort(heights);
                break;
            case 'Insertion sort':
                sorted = InsertionSort(heights);
                break;
            case 'Selection sort':
                sorted = SelectionSort(heights);
                break;
            default:
                sorted = [heights];
                break;
        }

        const step = (i) => {
            if (i < sorted.length) {
                setTimeout(async () => {
                    modifyHeights([...sorted[i]]);
                    step(i+1);
                }, 10);
            } else {
                sortbutton.disabled = false;
                randomizebutton.disabled = false;
            }
            return;
        }

        step(0);
    }

    return (
        <>
            <Button variant="success" onClick={sortHeights} id='sort' className='sort'>Sort</Button>
        </>
    );
}

export default SortButton;