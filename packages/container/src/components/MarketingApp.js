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

import { mount } from 'Marketing/marketingApp';
import React, { useRef, useEffect } from 'react';

export default () => {
  const ref = useRef(null);

  useEffect(() => {
    mount(ref.current);
  });

  return <div ref={ref} />;
};
