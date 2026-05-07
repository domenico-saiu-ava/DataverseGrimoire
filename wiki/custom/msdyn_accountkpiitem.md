---
logical: "msdyn_accountkpiitem"
display: "Elemento KPI account"
entitySetName: "msdyn_accountkpiitems"
primaryId: "msdyn_accountkpiitemid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Elemento KPI account

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_accountkpiitem` |
| Display name | Elemento KPI account |
| Display (plural) | Elementi KPI account |
| Schema name | `msdyn_accountkpiitem` |
| Entity set (Web API) | `msdyn_accountkpiitems` |
| Primary id attribute | `msdyn_accountkpiitemid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_accountkpiitems?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_accountkpiitems(<guid>)
POST /api/data/v9.2/msdyn_accountkpiitems
PATCH /api/data/v9.2/msdyn_accountkpiitems(<guid>)
DELETE /api/data/v9.2/msdyn_accountkpiitems(<guid>)
```

## Attributes

Writable: **34** · Read-only: **8**

### Writable

`importsequencenumber`, `msdyn_accountid`, `msdyn_accountkpiitemid`, `msdyn_acilastupdatetimestamp`, `msdyn_averagefirstresponsetimebytheminhrs`, `msdyn_averagefirstresponsetimebyusinhrs`, `msdyn_computationaccuracy`, `msdyn_date`, `msdyn_emailattachmentopens`, `msdyn_emaillinksclicked`, `msdyn_emailsreceived`, `msdyn_emailssent`, `msdyn_facetimewithcustomer`, `msdyn_liemailssent`, `msdyn_meetingsreceived`, `msdyn_meetingssent`, `msdyn_name`, `msdyn_openedemails`, `msdyn_phonecallsmade`, `msdyn_phonecallsreceived`, `msdyn_relationshiphealthscorestate`, `msdyn_relationshiphealthscorevalue`, `msdyn_relationshiphealthtrend`, `msdyn_responseratebythem`, `msdyn_responseratebyus`, `msdyn_timespentbycustomer`, `msdyn_timespentbycustomer_calculated`, `msdyn_timespentbyteam`, `msdyn_timespentbyteam_calculated`, `overriddencreatedon`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `organizationid`, `versionnumber`

## Relationships

### Many-to-One (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_accountkpiitem_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_accountkpiitem_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_accountkpiitem_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_accountkpiitem_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_msdyn_accountkpiitem` | [organization](organization.md) | `organizationid` | `organizationid` |
| `msdyn_account_msdyn_accountkpiitem_accountid` | [account](account.md) | `msdyn_accountid` | `msdyn_accountid` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_accountkpiitem_SyncErrors` | [msdyn_accountkpiitem](msdyn_accountkpiitem.md) | `regardingobjectid` | `regardingobjectid_msdyn_accountkpiitem` |
| `msdyn_accountkpiitem_AsyncOperations` | [msdyn_accountkpiitem](msdyn_accountkpiitem.md) | `regardingobjectid` | `regardingobjectid_msdyn_accountkpiitem` |
| `msdyn_accountkpiitem_MailboxTrackingFolders` | [msdyn_accountkpiitem](msdyn_accountkpiitem.md) | `regardingobjectid` | `regardingobjectid_msdyn_accountkpiitem` |
| `msdyn_accountkpiitem_UserEntityInstanceDatas` | [msdyn_accountkpiitem](msdyn_accountkpiitem.md) | `objectid` | `objectid_msdyn_accountkpiitem` |
| `msdyn_accountkpiitem_ProcessSession` | [msdyn_accountkpiitem](msdyn_accountkpiitem.md) | `regardingobjectid` | `regardingobjectid_msdyn_accountkpiitem` |
| `msdyn_accountkpiitem_BulkDeleteFailures` | [msdyn_accountkpiitem](msdyn_accountkpiitem.md) | `regardingobjectid` | `regardingobjectid_msdyn_accountkpiitem` |
| `msdyn_accountkpiitem_PrincipalObjectAttributeAccesses` | [msdyn_accountkpiitem](msdyn_accountkpiitem.md) | `objectid` | `objectid_msdyn_accountkpiitem` |
| `msdyn_msdyn_accountkpiitem_account_accountkpiid` | [msdyn_accountkpiitem](msdyn_accountkpiitem.md) | `msdyn_accountkpiid` | `msdyn_accountkpiid` |


## Source

Generated from [msdyn_accountkpiitem (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_accountkpiitem')) on 2026-05-07.