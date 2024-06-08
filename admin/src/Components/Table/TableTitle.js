  // import I18NextContext from "@/Helper/I18NextContext";
  // import { useTranslation } from "@/app/i18n/client";
  import { usePathname, useRouter } from "next/navigation";
  import { useContext } from "react";
  import { FiPlus } from "react-icons/fi";
  import Btn from "../../Elements/Buttons/Btn";
  // import Pluralize from "../../Utils/CustomFunctions/Pluralize";
  import NoSsr from "../../Utils/HOC/NoSsr";
  import ImportExport from "./ImportExport";

  const TableTitle = ({ moduleName, onlyTitle, type, filterHeader, importExport, refetch }) => {
    // const { i18Lang } = useContext(I18NextContext);
    // const { t } = useTranslation(i18Lang, 'common');
    const router = useRouter();
    const pathname = usePathname();
    return (
      <div className="title-header option-title">
        <h5>{filterHeader?.customTitle ? filterHeader?.customTitle : (moduleName)}</h5>
        {importExport && <ImportExport importExport={importExport} refetch={refetch} />}
        <NoSsr>
          {filterHeader?.customFilter && filterHeader?.customFilter}
          {!onlyTitle && (
            <Btn className="align-items-center btn-theme add-button" title={"Thêm" + " " + moduleName} onClick={() =>
              type == "post" && (moduleName.toLowerCase()) == "tag"
                ?
                router.push(`/${pathname.split("/")[1]}/tag/create`)
                :
                type == 'post'
                  ?
                  router.push(`/${pathname.split("/")[1]}/category/create`)
                  :
                  router.push(`/${pathname.split("/")[1]}/create`)
            }>
              <FiPlus />
            </Btn>
          )}
        </NoSsr>
      </div>
    );
  };

  export default TableTitle;
