import React, { useContext, useState } from "react";
// import { useTranslation } from "@/app/i18n/client";
import { Input } from "reactstrap";
// import I18NextContext from "@/Helper/I18NextContext";

const TopSection = ({ setSearch, setSorting, search, sorting }) => {
    // const { i18Lang } = useContext(I18NextContext);
    // const { t } = useTranslation(i18Lang, 'common');
    const [tc, setTc] = useState(null);
    const [text, setText] = useState("");
    // Debouncing function for filtering image by its name
    const onChange = (text) => {
        if (tc) clearTimeout(tc);
        setTc(setTimeout(() => setSearch(text), 1000));
    };
    // Image Sorting 
    const onSortingChange = (value) => {
        if (tc) clearTimeout(tc);
        setTc(setTimeout(() => setSorting(value), 1000));
    };
    return (
        <div className="select-top-panel">
            <div>
                <Input type="search" className="form-control" value={text || search}
                    placeholder={"Searchyourfiles"}
                    onChange={(e) => {
                        onChange(e.target.value);
                        setText(e.target.value);
                    }}
                />
            </div>
            <select className="form-select" value={sorting} onChange={(e) => onSortingChange(e.target.value)}>
                <option value={"newest"}>{"SortBynewest"}</option>
                <option value={"oldest"}>{"SortByoldest"}</option>
                <option value={"smallest"}>{"SortBysmallest"}</option>
                <option value={"largest"}>{"SortBylargest"}</option>
            </select>
        </div>
    );
};

export default TopSection;