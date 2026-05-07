---
logical: "adx_invitation_invitecontacts"
display: "adx_invitation_invitecontacts"
entitySetName: "adx_invitation_invitecontactsset"
primaryId: "adx_invitation_invitecontactsid"
tableType: "Standard"
ownership: "None"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# adx_invitation_invitecontacts

## Identity

| Property | Value |
| --- | --- |
| Logical name | `adx_invitation_invitecontacts` |
| Display name | adx_invitation_invitecontacts |
| Schema name | `adx_invitation_invitecontacts` |
| Entity set (Web API) | `adx_invitation_invitecontactsset` |
| Primary id attribute | `adx_invitation_invitecontactsid` |
| Table type | Standard |
| Ownership | None |

## Web API examples

```http
GET /api/data/v9.2/adx_invitation_invitecontactsset?$select=&$top=10
GET /api/data/v9.2/adx_invitation_invitecontactsset(<guid>)
POST /api/data/v9.2/adx_invitation_invitecontactsset
PATCH /api/data/v9.2/adx_invitation_invitecontactsset(<guid>)
DELETE /api/data/v9.2/adx_invitation_invitecontactsset(<guid>)
```

## Attributes

Writable: **0** · Read-only: **4**

### Read-only

`adx_invitation_invitecontactsid`, `adx_invitationid`, `contactid`, `versionnumber`

## Relationships



### Many-to-Many (1)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `adx_invitation_invitecontacts` | [adx_invitation](adx_invitation.md) | _n/a_ | `adx_invitation_invitecontacts` |

## Source

Generated from [adx_invitation_invitecontacts (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='adx_invitation_invitecontacts')) on 2026-05-07.