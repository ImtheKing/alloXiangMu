using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data.SqlClient;
namespace project20160618
{
    /// <summary>
    /// Handler1 的摘要说明
    /// </summary>
    public class Handler1 : IHttpHandler
    {
        public string strResult = "";
        public HttpContext context = null;
        public void ProcessRequest(HttpContext context)
        {
            this.context = context;
            string cmd = context.Request.Form["cmd"];
            switch (cmd)
            {
                case "login":
                    strResult = UserLogin();
                    break;
                case "reg":
                    strResult = UserReg();
                    break;
            }
            context.Response.Write(strResult);

        }
        public string UserReg()
        {
            string username = context.Request.Form["uname"];
            string pwd = context.Request.Form["upwd"];
            string qq = context.Request.Form["qq"];
            string tel = context.Request.Form["tel"];
            string realname = context.Request.Form["realname"];
            string sSql1 = "select UserId from UserInfor  where UserName=@UserName";
            SqlParameter[] para1 = new SqlParameter[] { new SqlParameter("@UserName", username) };
            if (SqlHelper.Exists(sSql1, para1))
            {
                return "error1";
            }
            else
            {
                string sSql = "insert into UserInfor(UserName,Pwd,QQ,PhoneNum,RealName) values(@UserName,@Pwd,@QQ,@PhoneNum,@RealName)";
                SqlParameter[] para = new SqlParameter[] { new SqlParameter("@UserName",username),new SqlParameter("@Pwd",pwd),
            new SqlParameter("@QQ",qq),new SqlParameter("PhoneNum",tel),new SqlParameter("@RealName",realname)};
                if (SqlHelper.ExecteNonQueryText(sSql, para) > 0)
                {
                    return "ok";
                }
                else
                {
                    return "error2";
                }
            }
        }
        public string UserLogin()
        {
            string username = context.Request.Form["uname"];
            string pwd = context.Request.Form["upwd"];
            string sSql = "select UserId from UserInfor  where UserName=@UserName and Pwd=@Pwd";
            SqlParameter[] para = new SqlParameter[] { new SqlParameter("@UserName", username), new SqlParameter("@Pwd", pwd) };
            if (SqlHelper.Exists(sSql, para))
            {
                return "ok";
            }
            else
            {
                return "error";
            }
        }
        public bool IsReusable
        {
            get
            {
                return false;
            }
        }
    }
}