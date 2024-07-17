'use client'

import { useEffect, useState } from "react";
import { SelectPicker } from "rsuite";
import { getCookie, hasCookie, setCookie } from 'cookies-next';
import 'rsuite/dist/rsuite.min.css';

const GoogleTranslate = () => {
    const [selected, setSelected] = useState(null)

    const languages = [
        { label: 'English', value: '/auto/en' },
        { label: 'Assamese', value: '/auto/as' },
        { label: 'Bengali', value: '/auto/bn' },
        { label: 'Gujarati', value: '/auto/gu' },
        { label: 'Hindi', value: '/auto/hi' },
        { label: 'Kannada', value: '/auto/kn' },
        { label: 'Konkani', value: '/auto/kok' },
        { label: 'Malayalam', value: '/auto/ml' },
        { label: 'Marathi', value: '/auto/mr' },
        { label: 'Nepali', value: '/auto/ne' },
        { label: 'Oriya', value: '/auto/or' },
        { label: 'Punjabi', value: '/auto/pa' },
        { label: 'Sanskrit', value: '/auto/sa' },
        { label: 'Sindhi', value: '/auto/sd' },
        { label: 'Tamil', value: '/auto/ta' },
        { label: 'Telugu', value: '/auto/te' },
        { label: 'Urdu', value: '/auto/ur' },
        { label: 'Maithili', value: '/auto/mai' },
        { label: 'Dogri', value: '/auto/doi' },];


    useEffect(() => {
        var addScript = document.createElement('script');
        addScript.setAttribute('src', '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit');
        document.body.appendChild(addScript);
        window.googleTranslateElementInit = googleTranslateElementInit;
        if (hasCookie('googtrans')) {
            setSelected(getCookie('googtrans'))
        }
        else {
            setSelected('/auto/en')
        }
    }, [])

    const googleTranslateElementInit = () => {
        new window.google.translate.TranslateElement({
            pageLanguage: 'auto',
            autoDisplay: false,
            layout: google.translate.TranslateElement.InlineLayout.SIMPLE
        },
            'google_translate_element');
    }

    const langChange = (e, m, evt) => {
        evt.preventDefault()
        if (hasCookie('googtrans')) {
            setCookie('googtrans', decodeURI(e))
            setSelected(e)
        }
        else {
            setCookie('googtrans', e)
            setSelected(e)
        }
        window.location.reload()
    }

    return (
        <>
            <div className="hidden" id="google_translate_element" style={{ width: '0px', height: '0px', position: 'absolute', left: '50%', zIndex: -99999 }}></div>
            <SelectPicker
                data={languages}
                style={{ width: 100 }}
                placement="bottomEnd"
                cleanable={false}
                value={selected}
                searchable={false}
                className={'notranslate'}
                menuClassName={'notranslate'}
                onSelect={(e, m, evt) => langChange(e, m, evt)}
                placeholder="Lang" />
        </>

    )
}

export default GoogleTranslate;