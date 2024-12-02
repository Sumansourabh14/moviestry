"use client";
import PageTitle from "@/components/text/PageTitle";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { GlobalContext } from "@/services/globalContext";
import { siteTitle } from "@/utils/content/site";
import { useContext, useEffect, useState } from "react";

const AllUsers = () => {
  const [users, setUsers] = useState([]);
  const { getUsers, loading } = useContext(GlobalContext);

  useEffect(() => {
    let mounted = true;

    const fetchUsers = async () => {
      const res = await getUsers();

      if (mounted) {
        setUsers(res.data.users);
      }
    };

    fetchUsers();

    return () => {
      mounted = false;
    };
  }, []);

  return (
    <>
      <title>{`Users | ${siteTitle}`}</title>
      <section className="flex flex-col mt-16 p-12 min-h-[90vh]">
        <PageTitle title="All Users" />
        <section className="my-8">
          {loading ? (
            <p>Loading...</p>
          ) : users.length > 0 ? (
            <section className="flex gap-12">
              {users.map((user) => (
                <div
                  key={user._id}
                  className="flex flex-col items-center gap-2 p-4"
                >
                  <Avatar>
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <h3>{user.name}</h3>
                </div>
              ))}
            </section>
          ) : (
            <p>None</p>
          )}
        </section>
      </section>
    </>
  );
};

export default AllUsers;
