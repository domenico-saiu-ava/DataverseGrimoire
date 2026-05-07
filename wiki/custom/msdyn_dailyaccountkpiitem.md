---
logical: "msdyn_dailyaccountkpiitem"
display: "KPI giornalieri per l'account"
entitySetName: "msdyn_dailyaccountkpiitems"
primaryId: "msdyn_dailyaccountkpiitemid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# KPI giornalieri per l'account

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_dailyaccountkpiitem` |
| Display name | KPI giornalieri per l'account |
| Display (plural) | dailyaccountkpiitems |
| Schema name | `msdyn_dailyaccountkpiitem` |
| Entity set (Web API) | `msdyn_dailyaccountkpiitems` |
| Primary id attribute | `msdyn_dailyaccountkpiitemid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_dailyaccountkpiitems?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_dailyaccountkpiitems(<guid>)
POST /api/data/v9.2/msdyn_dailyaccountkpiitems
PATCH /api/data/v9.2/msdyn_dailyaccountkpiitems(<guid>)
DELETE /api/data/v9.2/msdyn_dailyaccountkpiitems(<guid>)
```

## Attributes

Writable: **19** · Read-only: **8**

### Writable

`importsequencenumber`, `msdyn_accountid`, `msdyn_computationaccuracy`, `msdyn_dailyaccountkpiitemid`, `msdyn_date`, `msdyn_emailsreceived`, `msdyn_emailssent`, `msdyn_entityid`, `msdyn_liemailssent`, `msdyn_meetingsreceived`, `msdyn_meetingssent`, `msdyn_name`, `msdyn_phonecallsmade`, `msdyn_phonecallsreceived`, `overriddencreatedon`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `organizationid`, `versionnumber`

## Relationships

### Many-to-One (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_dailyaccountkpiitem_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_dailyaccountkpiitem_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_dailyaccountkpiitem_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_dailyaccountkpiitem_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_msdyn_dailyaccountkpiitem` | [organization](organization.md) | `organizationid` | `organizationid` |
| `msdyn_account_dailyaccountkpiitem_entityid` | [account](account.md) | `msdyn_entityid` | `msdyn_entityid` |

### One-to-Many (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_dailyaccountkpiitem_SyncErrors` | [msdyn_dailyaccountkpiitem](msdyn_dailyaccountkpiitem.md) | `regardingobjectid` | `regardingobjectid_msdyn_dailyaccountkpiitem` |
| `msdyn_dailyaccountkpiitem_AsyncOperations` | [msdyn_dailyaccountkpiitem](msdyn_dailyaccountkpiitem.md) | `regardingobjectid` | `regardingobjectid_msdyn_dailyaccountkpiitem` |
| `msdyn_dailyaccountkpiitem_MailboxTrackingFolders` | [msdyn_dailyaccountkpiitem](msdyn_dailyaccountkpiitem.md) | `regardingobjectid` | `regardingobjectid_msdyn_dailyaccountkpiitem` |
| `msdyn_dailyaccountkpiitem_UserEntityInstanceDatas` | [msdyn_dailyaccountkpiitem](msdyn_dailyaccountkpiitem.md) | `objectid` | `objectid_msdyn_dailyaccountkpiitem` |
| `msdyn_dailyaccountkpiitem_ProcessSession` | [msdyn_dailyaccountkpiitem](msdyn_dailyaccountkpiitem.md) | `regardingobjectid` | `regardingobjectid_msdyn_dailyaccountkpiitem` |
| `msdyn_dailyaccountkpiitem_BulkDeleteFailures` | [msdyn_dailyaccountkpiitem](msdyn_dailyaccountkpiitem.md) | `regardingobjectid` | `regardingobjectid_msdyn_dailyaccountkpiitem` |
| `msdyn_dailyaccountkpiitem_PrincipalObjectAttributeAccesses` | [msdyn_dailyaccountkpiitem](msdyn_dailyaccountkpiitem.md) | `objectid` | `objectid_msdyn_dailyaccountkpiitem` |


## Source

Generated from [msdyn_dailyaccountkpiitem (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_dailyaccountkpiitem')) on 2026-05-07.