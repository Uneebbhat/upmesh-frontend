import Connects from "@/components/BrowseJobs/Connects";
import BrowseJobsCard from "@/components/BrowseJobs/BrowseJobsCard";
import ConnectsSkeleton from "@/components/BrowseJobs/ConnectsSkeleton";
import BasicProfileInfo from "@/components/BrowseJobs/BasicProfileInfo";
import BrowseJobsCardSkeleton from "@/components/BrowseJobs/BrowseJobsCardSkeleton";
import BasicProfileInfoSkeleton from "@/components/BrowseJobs/BasicProfileInfoSkeleton";

import { Metadata } from "next";
import { Suspense } from "react";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Upmesh | Find work",
  description:
    "Browse freelance jobs and projects on Upmesh. Find work that matches your skills and interests, and connect with clients looking for talented professionals.",
};

export default function BrowseJobsPage() {
  // const router = useRouter();
  // const searchParams = useSearchParams();

  // const [text, setText] = useState("");
  // const [selectedCategory, setSelectedCategory] = useState("all");

  // // Synchronize state with URL params
  // useEffect(() => {
  //   setText(searchParams.get("q") || "");
  //   setSelectedCategory(searchParams.get("category") || "all");
  // }, [searchParams]);

  // const handleSearch = (e: any) => {
  //   const value = e.target.value;
  //   setText(value);

  //   const params = new URLSearchParams(window.location.search);
  //   if (value) {
  //     params.set("q", value);
  //   } else {
  //     params.delete("q");
  //   }
  //   router.replace(`?${params.toString()}`);
  // };

  // // Combine filters for both text and timeline
  // const filteredJobs = fakeJobs
  //   .filter((item) => item.title.toLowerCase().includes(text.toLowerCase()))
  //   .filter((item) => {
  //     if (selectedCategory === "all") return true;
  //     if (selectedCategory === "oneMonth") return item.timeline === "1";
  //     if (selectedCategory === "twoMonths") return item.timeline === "2";
  //     if (selectedCategory === "threeMonths") return item.timeline === "3";
  //     return true;
  //   });

  // const handleTimeLineChange = (value: string) => {
  //   setSelectedCategory(value);
  //   const params = new URLSearchParams(window.location.search);
  //   if (value && value !== "all") {
  //     params.set("category", value);
  //   } else {
  //     params.delete("category");
  //   }
  //   router.replace(`?${params.toString()}`);
  // };

  // console.log(selectedCategory);
  // console.log(filteredJobs);
  // <Select
  // // value={selectedCategory}
  // // onValueChange={handleTimeLineChange}
  // >
  //   <SelectTrigger className="w-[180px]" aria-label="Filter by months">
  //     <SelectValue placeholder="Filters" />
  //   </SelectTrigger>
  //   <SelectContent>
  //     <SelectItem value="all">All Time</SelectItem>
  //     <SelectItem value="1">1 month</SelectItem>
  //     <SelectItem value="2">2 months</SelectItem>
  //     <SelectItem value="3">3 months</SelectItem>
  //     <SelectItem value="6+">6+ months</SelectItem>
  //   </SelectContent>
  // </Select>;

  return (
    <>
      <section className="py-5">
        <div className="flex justify-between lg:gap-5">
          <div className="flex flex-col gap-8 w-full">
            <div>
              <Input
                type="search"
                placeholder="Search Job"
                // value={text}
                // onChange={handleSearch}
              />
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-5">
                Browse your favourite job
              </h2>
              <Tabs defaultValue="browseJob" className="w-full">
                <TabsList>
                  <TabsTrigger value="browseJob">Browse Jobs</TabsTrigger>
                  <TabsTrigger value="savedJob">Saved Jobs</TabsTrigger>
                </TabsList>
                <TabsContent value="browseJob">
                  <div className="grid grid-cols-1 gap-6">
                    <Suspense fallback={<BrowseJobsCardSkeleton />}>
                      <BrowseJobsCard />
                    </Suspense>
                  </div>
                </TabsContent>
                <TabsContent value="savedJob">
                  <div className="flex flex-col items-center justify-center h-full py-8">
                    <Image
                      src={"/save-job.svg"}
                      alt="Saved Jobs"
                      width={300}
                      height={300}
                    />
                    <span className="mt-4 text-center">
                      Keep track of jobs you're interested in. Select the
                      bookmark icon on a job post to save it for later.
                    </span>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
          <div className="lg:w-[28%] flex flex-col gap-8">
            <Suspense fallback={<BasicProfileInfoSkeleton />}>
              <BasicProfileInfo />
            </Suspense>
            <Suspense fallback={<ConnectsSkeleton />}>
              <Connects />
            </Suspense>
          </div>
        </div>
      </section>
    </>
  );
}
