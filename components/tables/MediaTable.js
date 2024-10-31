import { displayDate } from "@/utils/functions/smallFunctions";
import Link from "next/link";
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";

const MediaTable = ({ docs, userId }) => {
  // const { deleteDoc } = useContext(GlobalContext);
  // const { toast } = useToast();

  // const removeDoc = async (id) => {
  //   const res = await deleteDoc(id);

  //   if (!!res) {
  //     toast({
  //       title: "Book deleted!",
  //       description: "Your book has been removed from the library",
  //     });
  //   }
  // };

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[240px]">Title</TableHead>
          <TableHead className="w-[200px]">Released</TableHead>
          <TableHead>Description</TableHead>
          <TableHead className="w-[120px]">Added on</TableHead>
          <TableHead>Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {docs.map((doc) => (
          <TableRow key={doc.$id}>
            <Link href={`/title/${doc.mediaId}`}>
              <TableCell className="font-medium hover:underline">
                {doc.title}
              </TableCell>
            </Link>
            <TableCell
              title={
                !!doc.release_date
                  ? new Date(doc.release_date).getFullYear()
                  : `Unreleased`
              }
            >
              {!!doc.release_date
                ? new Date(doc.release_date).getFullYear()
                : "-"}
            </TableCell>
            <TableCell
              title={!!doc.overview ? `${doc?.overview}` : `No description`}
            >
              {!!doc.overview ? doc.overview : "-"}
            </TableCell>
            <TableCell>{displayDate(doc?.createdAt)}</TableCell>
            <TableCell className="text-right flex gap-2">
              {/* <Button asChild>
                  <Link href={`/book/${doc.$id}/read`}>Read</Link>
                </Button> */}
              {/* {userId === doc.uploadedBy && (
                  <>
                    <Button asChild variant="outline" title="Edit">
                      <Link href={`/book/${doc.$id}/edit`}>
                        <Pencil className="h-4 w-4" />
                      </Link>
                    </Button>
                    <Dialog>
                      <DialogTrigger>
                        <Button variant="destructive" title="Delete">
                          <Trash className="h-4 w-4" />
                        </Button>
                      </DialogTrigger>
                      <ConfirmationDialogContent
                        title={"Delete this book?"}
                        description={
                          "This action cannot be undone. This will permanently delete your book and remove it from our servers."
                        }
                        actionTitle={"Delete"}
                        action={() => {
                          removeDoc(doc.$id);
                        }}
                      />
                    </Dialog>
                  </>
                )} */}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={4}>Total</TableCell>
          <TableCell className="text-right">{docs.length} Movies</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
};

export default MediaTable;
