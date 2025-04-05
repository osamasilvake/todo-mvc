import axios from "axios";
import { useEffect, useState } from "react";
import { Framework } from "./App";
import "./FrameworkDetail.css";
import { useParams } from "react-router-dom";
import Todos from "./components/todos/Todos";

// Framework Detail Component
export function FrameworkDetail() {
    const { id } = useParams<{ id: string }>();
    const [framework, setFramework] = useState<Framework | null>(null);
  
    const  fetchFrameworks = async () => {
        const res = await axios.get(`http://localhost:5000/frameworks/${id}`);
        setFramework(res.data)
        }

    useEffect(() => {
   fetchFrameworks()
    }, [id]);
  
    if (!framework) return <p className="text-center">Loading...</p>;
  
    return (
        <div className="flex ">
      <div className="rounded-sm w-[272px] p-2.5 mx-2 mt-2 bg-[hsla(0,0%,100%,0.6)]">
        <h1 className="text-xl font-bold mb-2">{framework.name}</h1>
        <div className="pb-4">
        <span>Example</span>
            <p><a href="">Source</a></p>
        </div>
        <hr className="border-b border-dashed border-[#c5c5c5]" />
        <blockquote className="speech-bubble quote">
        <p className="text-gray-700 font-[300] text-[15px]">{framework.description}</p>
        </blockquote>
        <p className="text-end"><a href="">{framework.name}  </a></p>
        <hr className="border-b border-dashed mt-5 border-[#c5c5c5]" />
        <div className="pt-5 pb-8">
            <h2 className=" text-[18px]">Official Resources
            </h2>
            <ul className="list-disc px-6 mt-4">
            <li>Quick Start</li>
            <li>API Reference</li>
            <li>Philosophy</li>
            <li>{framework.name} Community</li>
            </ul>
        </div>
        <hr className="border-b border-dashed border-[#c5c5c5] mt-5 mb-6" />
        <em className="">
        If you have other helpful links to share, or find any of the links above no longer work, please let us know.
        </em>
      </div>
      <div className="flex-1/2">
        <Todos />
      </div>
      </div>
    );
  }