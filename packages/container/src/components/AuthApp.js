// why we are importing mount from marketing app 
/**
 *  refer images 2 and 3
 *  to maintain zero coupling bwtween parent and child applications
 * 
 *  we can directly import component from marketing and can render it in here but it
 *  creates dependency between two apps.
 * 
 *  if in future marketing app is changed to other framework then changes needs to be done in both the applications
 *  To avoid that we maintian zero dependency between applications
 * 
 *  This kind of design pattern can be used despite of any framwework
 */

 import { mount } from 'Auth/AuthApp';
 import React, { useRef, useEffect } from 'react';
 import { useHistory } from 'react-router-dom';
 
 export default () => {
   const ref = useRef(null);
   const history = useHistory();
   // const location = useLocation();
 
   useEffect(() => {
    const {onParentNavigate} =  mount(ref.current, {
       // updating container path when child path updates (subApp -> container)
       onNavigate: ({ pathname: nextPathName }) => {
         const { pathname } = history.location;
         console.log('onNavigate Auth', pathname, nextPathName);
         if (pathname !== nextPathName) {
           history.push(nextPathName);
         }
       },
    //    initialPath: history.location.pathname
     });
 
     // parent to child communication when path updates in container it will pass update to subApplications
     history.listen(onParentNavigate);
   }, []);
 
   return <div ref={ref} />;
 };
 