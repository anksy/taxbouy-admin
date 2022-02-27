import React from "react";
//import { useSelector } from "react-redux";
import Sidebar from "../components/sidebar";
import Footer from "../components/footer";
/* import Snackbar from "../components/snackbar";
import Loader from "../components/loader";
import Dialog from "../components/dialog";
 */
import * as sc from "./styles.js";




function AfterLoginLayout() {
  /*   const appSelector = useSelector(state => state.application);
    const shopSelector = useSelector(state => state.shop);*/

    return (
        <sc.AppWrapper className="wrapper">
                <>
                    <Sidebar />
                    <sc.AppContent>
                        <sc.AppMainContent>x
                          </sc.AppMainContent>
                        <Footer />
                    </sc.AppContent>
                </>

      {/*       <Snackbar toastr={appSelector.toastr} />
            <Loader loading={appSelector.loading || shopSelector.loading} />
            <Dialog open={appSelector.modal.open} modalProps={appSelector.modal.modalProps} />
       */} 
        </sc.AppWrapper>
    );
}

export default AfterLoginLayout;
