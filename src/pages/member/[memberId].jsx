import { List } from '@/components/json';
import { useRouter } from 'next/router';
import React from 'react';

function Member() {
  const router = useRouter();
  // Access the variable part of the URL
  const { memberId } = router.query;

  // Convert 'member' to a number
  // const memberId = parseInt(member, 10);

  // Assuming 'memberId' is a variable holding the ID you want to find
  const memberDetails = List.find((myMember) => myMember?.id === memberId);

  // Accessing the name property using optional chaining
  const memberName = memberDetails?.name;
  const memberAddress = memberDetails?.details?.Address;
  const memberTitle = memberDetails?.title;
  return <div className='bg-white text-lg'>
    <h1>{memberName}</h1>
    <h1>{memberAddress  }</h1>
    <h1>{ memberTitle}</h1>
  </div>;
}

export default Member;
