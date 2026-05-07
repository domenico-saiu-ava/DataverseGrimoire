---
logical: "adx_invitation_mspp_webrole_powerpagecomponent"
display: "adx_invitation_mspp_webrole_powerpagecomponent"
entitySetName: "adx_invitation_mspp_webrole_powerpagecomponentset"
primaryId: "adx_invitation_mspp_webrole_powerpagecomponentid"
tableType: "Standard"
ownership: "None"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# adx_invitation_mspp_webrole_powerpagecomponent

## Identity

| Property | Value |
| --- | --- |
| Logical name | `adx_invitation_mspp_webrole_powerpagecomponent` |
| Display name | adx_invitation_mspp_webrole_powerpagecomponent |
| Schema name | `adx_invitation_mspp_webrole_powerpagecomponent` |
| Entity set (Web API) | `adx_invitation_mspp_webrole_powerpagecomponentset` |
| Primary id attribute | `adx_invitation_mspp_webrole_powerpagecomponentid` |
| Table type | Standard |
| Ownership | None |

## Web API examples

```http
GET /api/data/v9.2/adx_invitation_mspp_webrole_powerpagecomponentset?$select=&$top=10
GET /api/data/v9.2/adx_invitation_mspp_webrole_powerpagecomponentset(<guid>)
POST /api/data/v9.2/adx_invitation_mspp_webrole_powerpagecomponentset
PATCH /api/data/v9.2/adx_invitation_mspp_webrole_powerpagecomponentset(<guid>)
DELETE /api/data/v9.2/adx_invitation_mspp_webrole_powerpagecomponentset(<guid>)
```

## Attributes

Writable: **0** · Read-only: **4**

### Read-only

`adx_invitation_mspp_webrole_powerpagecomponentid`, `adx_invitationid`, `powerpagecomponentid`, `versionnumber`

## Relationships



### Many-to-Many (1)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `adx_invitation_mspp_webrole_powerpagecomponent` | [adx_invitation](adx_invitation.md) | _n/a_ | `adx_invitation_mspp_webrole_powerpagecomponent` |

## Source

Generated from [adx_invitation_mspp_webrole_powerpagecomponent (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='adx_invitation_mspp_webrole_powerpagecomponent')) on 2026-05-07.