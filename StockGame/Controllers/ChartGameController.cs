using Microsoft.AspNetCore.Mvc;

namespace StockGame.Controllers
{
    public class ChartGameController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
        public IActionResult Board()
        {
            return View();
        }
    }
}