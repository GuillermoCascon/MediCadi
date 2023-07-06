import { useContext } from "react";
import MedicamentContext from "../context/MedicinesProvider";

const useMedicines = () => {
    return useContext(MedicamentContext)
}

export default useMedicines