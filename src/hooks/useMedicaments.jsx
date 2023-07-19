import { useContext } from "react";
import MedicamentContext from "../context/MedicinesProvider";

const useMedicaments = () => {
    return useContext(MedicamentContext)
}

export default useMedicaments