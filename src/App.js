import React, { useEffect } from "react";
import { ChakraProvider} from "@chakra-ui/react"
import AOS from "aos";
import "aos/dist/aos.css";
import './App.css'
import Layout from "./components/Layout";



export default function App() {

    useEffect(() => {
        AOS.init();
        AOS.refresh();
    });

    return (
        <ChakraProvider>
            <Layout />
        </ChakraProvider>
    )
}