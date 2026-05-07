---
logical: "adx_invitation_redeemedcontacts"
display: "adx_invitation_redeemedcontacts"
entitySetName: "adx_invitation_redeemedcontactsset"
primaryId: "adx_invitation_redeemedcontactsid"
tableType: "Standard"
ownership: "None"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# adx_invitation_redeemedcontacts

## Identity

| Property | Value |
| --- | --- |
| Logical name | `adx_invitation_redeemedcontacts` |
| Display name | adx_invitation_redeemedcontacts |
| Schema name | `adx_invitation_redeemedcontacts` |
| Entity set (Web API) | `adx_invitation_redeemedcontactsset` |
| Primary id attribute | `adx_invitation_redeemedcontactsid` |
| Table type | Standard |
| Ownership | None |

## Web API examples

```http
GET /api/data/v9.2/adx_invitation_redeemedcontactsset?$select=&$top=10
GET /api/data/v9.2/adx_invitation_redeemedcontactsset(<guid>)
POST /api/data/v9.2/adx_invitation_redeemedcontactsset
PATCH /api/data/v9.2/adx_invitation_redeemedcontactsset(<guid>)
DELETE /api/data/v9.2/adx_invitation_redeemedcontactsset(<guid>)
```

## Attributes

Writable: **0** · Read-only: **4**

### Read-only

`adx_invitation_redeemedcontactsid`, `adx_invitationid`, `contactid`, `versionnumber`

## Relationships



### Many-to-Many (1)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `adx_invitation_redeemedcontacts` | [adx_invitation](adx_invitation.md) | _n/a_ | `adx_invitation_redeemedcontacts` |

## Source

Generated from [adx_invitation_redeemedcontacts (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='adx_invitation_redeemedcontacts')) on 2026-05-07.