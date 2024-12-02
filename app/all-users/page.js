"use client";
import PageTitle from "@/components/text/PageTitle";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { GlobalContext } from "@/services/globalContext";
import { siteTitle } from "@/utils/content/site";
import Link from "next/link";
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

  useEffect(() => {
    document.title = `All Users | ${siteTitle}`;
  }, []);

  return (
    <>
      <section className="flex flex-col mt-16 p-12 min-h-[90vh] max-w-[1400px] mx-auto">
        <PageTitle title="All Users" />
        <section className="my-8">
          {loading ? (
            <p>Loading...</p>
          ) : users.length > 0 ? (
            <section className="flex gap-12">
              {users.map((user) => (
                <Link
                  href={`/all-users/${user._id}/watched`}
                  key={user._id}
                  className="flex flex-col items-center gap-2 p-4"
                >
                  <Avatar>
                    <AvatarFallback>
                      {user.name.slice(0, 1).toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                  <h3>{user.name}</h3>
                </Link>
              ))}
            </section>
          ) : (
            <p>There are no users registered with Moviestry</p>
          )}
        </section>
      </section>
    </>
  );
};

export default AllUsers;
