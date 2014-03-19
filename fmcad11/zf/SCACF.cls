\NeedsTeXFormat{LaTeX2e}[1995/12/01]
\ProvidesClass{SCAC}[2008/11/15 v1, by Liu Yun]



\let\CCTCJKfonts=1
\LoadClass[twoside,CJK]{cctart}
%% math packages
\RequirePackage{amsmath,amsthm,amsfonts,cct,amssymb,bm,fancyhdr,color,multicol,mathrsfs,array,pifont,amscd,latexsym,upgreek,txfonts,graphicx,
}
%% graphics packages
\RequirePackage{graphicx}
%% other packages
\RequirePackage{url,float}
%% check pdfTeX mode
\RequirePackage{ifpdf}

\input psfig.sty
%------------------------ Page layout ----------------------------------

\textwidth=160truemm
\textheight=218truemm
\headsep=7truemm
\topmargin=-10pt
\oddsidemargin=2pt
\evensidemargin=2pt
\parindent=22pt
\footskip=10mm
\renewcommand{\baselinestretch}{1.31}
\renewcommand{\arraystretch}{1.21}
\newcommand{\bahao}{\fontsize{9pt}{\baselineskip}\selectfont}
%\newcommand{\xiaosanhao}{\fontsize{15pt}{2\baselineskip}\selectfont}
\newcommand{\zaiyao}{\fontsize{9.3pt}{0.76\baselineskip}\selectfont}
\newcommand{\xiaowuhao}{\fontsize{9pt}{0.76\baselineskip}\selectfont}
\newcommand{\liuhao}{\fontsize{8pt}{\baselineskip}\selectfont}


%----------------------- Title Page ----------------------------------

\let\@Year\@empty \def\Year#1{\def\@Year{#1}}
\let\@Vol\@empty \def\Vol#1{\def\@Vol{#1}}
\let\@No\@empty \def\No#1{\def\@No{#1}}
\let\@BeginPage\@empty \def\BeginPage#1{\def\@BeginPage{#1}}
\let\@EndPage\@empty \def\EndPage#1{\def\@EndPage{#1}}
\let\@ReceivedDate\@empty \def\ReceivedDate#1{\def\@ReceivedDate{#1}}
\let\@AcceptedDate\@empty \def\AcceptedDate#1{\def\@AcceptedDate{#1}}
\let\@Email\@empty \def\Email#1{\def\@Email{#1}}
\let\@Foundation\@empty \def\Foundation#1{\def\@Foundation{#1}}
\let\@Authormark\@empty \def\Authormark#1{\def\@Authormark{#1}}
\let\@Correspondingauthor\@empty \def\Correspondingauthor#1{\def\@Correspondingauthor{#1}}
\def\REF#1{\par\hangindent\parindent\indent\llap{#1\enspace}\ignorespaces}

%\let\@Thanks\@empty \def\Thanks#1{\def\@Thanks{#1}}
\let\@title\@empty
\renewcommand\title[2][]{
%\vspace*{-1.5cm}\noindent
  %\parbox[c]{12cm}{
    %{\small\songti{\bahao}
%中国科学\,: 信息科学\hspace{5mm}\@Year\,年\hspace{3mm}第\,\@Vol\,卷\hspace{3mm}
%第\,\@No\,期\,:\;\@BeginPage\,$\sim$\,\@EndPage} \vspace{1.5truemm} \hrule depth0pt
%height0.25truemm width 118 truemm 
%\vspace{1.5truemm} 
%{\sf\zihao{-5}www.scichina.com\hspace{6mm}info.scichina.com}}
%\parbox[c]{3.8cm}
%{\hfill\includegraphics{SB-F.eps}}
  \vspace{14truemm}
  \def\@title{{\bfseries\huge\heiti\zihao{2}#2}}
  \def\@titlehead{#1}
  \ifx\@titlehead\@empty\def\@titlehead{#2}\fi
}
\let\@author\@empty
\renewcommand*{\author}[3][]{%
  \ifx \@author\@empty
    \def\@author{\kaishu\zihao{4}#2\@authornote{#1}{#3}}
    \def\@authorhead{#2}
  \else
    \expandafter\def\expandafter\@author\expandafter
      {\@author,\,\, #2\@authornote{#1}{#3}}
    \expandafter\def\expandafter\@authorhead\expandafter
      {\@authorhead}
  \fi
}
\def\@authornote#1#2{%
  \def\SCAC@author@address{#1}%
  \def\SCAC@author@footnote{#2}%
  \ifx \SCAC@author@address\@empty
    \ifx \SCAC@author@footnote\@empty
    \else
       \footnote{#2}%
    \fi
  \else
    \textsuperscript{\footnotesize #1}%
    \ifx \SCAC@author@footnote\@empty
    \else
      \textsuperscript{}%
        \footnote{#2}%
    \fi
  \fi}
\def\@address{}
\newcommand*{\address}[2][]{%
  \ifx \@address\@empty
    \def\@address{\mbox{#1~~#2}}
  \else
    \expandafter\def\expandafter\@address\expandafter
      {\@address\\ \mbox{#1~~#2}}
  \fi}

\renewcommand\maketitle{\par
  \begingroup
    \renewcommand\thefootnote{\@fnsymbol\c@footnote}%
    \def\@makefnmark{\hbox{\@textsuperscript{\normalfont\@thefnmark}}}%
    \long\def\@makefntext##1{\noindent\@textsuperscript{\normalfont
    \@thefnmark}##1}%
    \@maketitle
\@thanks
    \long\def\@makefntext##1{\noindent##1}%
  \endgroup
  \setcounter{footnote}{0}%
  \setcounter{page}{\@BeginPage}
}
\def\@maketitle{%
  \begingroup\noindent%
    %\let\footnote\thanks
    \begin{flushleft}{\@title}%
    \vskip 0.4 true cm%
    \begin{flushleft}\rmfamily\Large\fangsong\zihao{4}
      \begin{tabular}[t]{@{}l@{}}%
        \@author
      \end{tabular}\par%
    \vspace{-3mm}
    %\vskip -0.3 true cm%
    \rmfamily\footnotesize\songti\zihao{6}
    \begin{flushleft}
    \@address\\
    \end{flushleft}%
 \vskip-0.4cm{\zihao{6} \@Correspondingauthor E-mail:\ \@Email}
    \vskip 0.4 true cm%   
    {\zihao{6} \@ReceivedDate~ 
    \@AcceptedDate  
    \\\vspace{-1.5mm} 
\@Foundation} 
  \endgroup
}

%----------------------- Running heads ---------------------------------
\def\ps@myheadings{
  \def\@evenfoot{\vbox{\hbox to\textwidth{\footnotesize\rm\hbox to 1cm
{\songti\rm\zihao{-5}\small\thepage\hfill} \hfill \hfill}}}
\def\@oddfoot{\vbox{\hbox to \textwidth{\hfill\hbox to 1cm{\hfill
\songti\rm\zihao{-5}\small\hspace{2mm}\thepage}}}}
\def\@oddhead{\vbox{\hbox to\textwidth{
    \rmfamily\small\songti\zihao{-5} \hfill
    中国科学\,: 信息数学\hspace{3mm}第~\@Vol~卷\hspace{3mm}第~\@No~期}\vspace{1.5truemm}
    \hrule depth 0pt height 0.25truemm width\textwidth}
  }
  \def\@evenhead{\vbox{\hbox to \textwidth{
    \rmfamily\small\songti\zihao{-5}\@Authormark: \@titlehead \hfill}\vspace{1.5truemm} 
    \hrule depth 0pt height 0.25truemm width\textwidth}
  }\thispagestyle{fancy}\fancyfoot{}
}
\pagestyle{myheadings}

%-------------------------- Abstract ----------------------------------
\renewenvironment{abstract}
  {\trivlist\itemindent\parindent\item\relax%
    \vskip-5mm
    \textcolor[rgb]{0.4,0.4,0.4}{\begin{picture}(0,0){\put(-22,0){\line(1,0){456}}}\end{picture}}
    \vskip2.3mm\noindent\hspace*{-2.8mm}\ignorespaces\fangsong }
  {\endtrivlist}
 
  
\newcommand*\keywords[1]{
  {\vskip-4.4mm\noindent {\xiaowuhao{\heiti 关键词}\par\fangsong #1}}
}
\newcommand*\MSC[1]{
  {\xiaowuhao\heiti\noindent MSC (2000) 主题分类\quad\fangsong #1
  \songti\rmfamily
  
  \begin{picture}(0,0){\put(-22,0){\line(1,0){0}}}\end{picture}}
}
\newcommand*\Thanks[1]{
  {\vspace{6mm}\noindent\parbox[b]{1cm}{\heiti{致谢}}\vspace{-5.7mm} 
\parbox[t]{15cm}{\fangsong{#1}}
 }
}

%-------------------------- Sections ----------------------------------
\renewcommand\sectionname{\thesection}
\renewcommand\sectionformat{}
\renewcommand\section{\@startsection {section}{1}{\z@}%
                                   {-4.5ex \@plus -1ex \@minus -.2ex}%
                                   {2.3ex \@plus.2ex}%
                                   {\normalfont\large\bfseries\heiti\zihao{-4}}}
\renewcommand\subsection{\@startsection{subsection}{2}{\z@}%
                                     {-3.25ex\@plus -1ex \@minus -.2ex}%
                                     {1.5ex \@plus .2ex}%
                                     {\normalfont\normalsize\bfseries\heiti}}

\def\sec#1{\vspace{7mm}\leftline{\bf\heiti\large\zihao{-4}#1}\vspace{3mm}}%定义三级章节
\def\subsec#1{\vspace{4mm}\leftline{\heiti\normalsize\bf{#1}\vspace{2mm}}} %定义二级章节
\def\subsubsec#1{\vspace{4mm}\leftline{\heiti\normalsize\bf{#1}\vspace{1mm}}} %定义二级章节
\def\th#1{{\bf\heiti\zihao{5} #1}\quad} %定义,定理,引理,证明等

\renewcommand\refname{\parbox[c]{2cm}{\heiti\zihao{5}参考文献}
\hspace{-6mm}\rule[0.01\baselineskip]{0.9\textwidth}{0.5pt}}
\def\@biblabel#1{#1~}
\renewenvironment{thebibliography}[1]
     {\section*{\refname}%
      \list{\@biblabel{\@arabic\c@enumiv}}%
           {\settowidth\labelwidth{\@biblabel{#1}}%
            \songti\leftmargin\labelwidth
            \advance\leftmargin\labelsep
            \@openbib@code
            \usecounter{enumiv}%
            \let\p@enumiv\@empty
            \renewcommand\theenumiv{\@arabic\c@enumiv}}%
      \itemsep 0ex
      \parskip 0ex
      \footnotesize
      \sloppy}

%----------------------- Math ---------------------------------
\def\leq{\leqslant}
\def\geq{\geqslant}
\def\le{\leqslant}
\def\ge{\geqslant}
\abovedisplayskip=3pt plus 1pt minus 1pt 
\belowdisplayskip=3pt plus 1pt minus 1pt 
\newcommand{\set}[1]{\ensuremath{\left\{ #1 \right\}}}%
\newcommand{\Set}[2]{\ensuremath{\left\{ #1 \left| \right. #2 \right\}}}%
\newcommand{\abs}[1]{\ensuremath{\left| #1 \right|}}%
\newcommand{\map}[3]{\ensuremath{#1 : #2 \rightarrow #3}}%
\newcommand{\C}[1]{\ensuremath{\mathcal{#1}}}%
\newcommand{\restrict}[2]{\ensuremath{#1 \left|_{#2}\right.}}%
\newcommand{\NN}{\mathbb{N}^0}
\newcommand{\PN}{\mathbb{N}}
\newcommand{\syn}{\mathbf{S}}
\newcommand{\Syn}{\mathbf{M}}
\allowdisplaybreaks
 
%----------------------- Others ---------------------------------
\newenvironment{listnum}{%
\begin{list}{{\rm(\arabic{enumi})}}{%
\usecounter{enumi}%
\labelwidth=4em%
\labelsep=0.5em%
\leftmargin=0em%
\rightmargin=0em%
\parsep=\parskip%
\itemsep=0ex
\topsep=0em%
\itemindent=3.2em%
}%
}{\end{list}}%

\newenvironment{listroman}{%
\begin{list}{{\rm(\roman{enumi})}}{%
\usecounter{enumi}%
\labelwidth=4em%
\labelsep=0.5em%
\leftmargin=3em%
\rightmargin=2em%
\parsep=\parskip%
\itemsep=0ex
\topsep=0em%
}%
}{\end{list}}%

\endinput
