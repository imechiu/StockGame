using Microsoft.AspNetCore.Mvc;

namespace StockGame.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}