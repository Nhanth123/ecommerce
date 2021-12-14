using Core.Entities.Identity;
using Microsoft.AspNetCore.Identity;
using System.Linq;
using System.Threading.Tasks;

namespace Infrastructure.Identity
{
    public class AppIdentityDbcontextSeed
    {
        public static async Task SeedUsersAsync(UserManager<AppUser> userManager)
        {
            if (!userManager.Users.Any())
            {
                var user = new AppUser
                {
                   DisplayName ="Bob",
                   Email ="bob@gmail.com",
                   UserName ="BobOwen",
                   Address = new Address
                   {
                       FirstName ="Bob",
                       LastName ="Owen",
                       Street ="10 The street",
                       City =   "New Yord",
                       State = "NY",
                       ZipCode ="90210"
                   }
                };
                await userManager.CreateAsync(user, "Pa$$w0rd");
            }
        }
    }
}
