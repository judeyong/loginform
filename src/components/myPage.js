import React from 'react';
import Todos from './todos';

import {useParams} from'react-router-dom';
import {useLocation} from'react-router-dom';

function MyPage() {
  const params = useParams();
  const location = useLocation();

  console.log('params',params);
  console.log('location',location);

  return (
    <div>
      <div>
        {params.id}님 안녕하세요.
      </div>
      <div>
        <Todos/>
      </div>
    </div>
  )
}

export default MyPage
