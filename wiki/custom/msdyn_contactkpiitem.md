---
logical: "msdyn_contactkpiitem"
display: "Elemento KPI contatto"
entitySetName: "msdyn_contactkpiitems"
primaryId: "msdyn_contactkpiitemid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Elemento KPI contatto

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_contactkpiitem` |
| Display name | Elemento KPI contatto |
| Display (plural) | Elementi KPI contatto |
| Schema name | `msdyn_contactkpiitem` |
| Entity set (Web API) | `msdyn_contactkpiitems` |
| Primary id attribute | `msdyn_contactkpiitemid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_contactkpiitems?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_contactkpiitems(<guid>)
POST /api/data/v9.2/msdyn_contactkpiitems
PATCH /api/data/v9.2/msdyn_contactkpiitems(<guid>)
DELETE /api/data/v9.2/msdyn_contactkpiitems(<guid>)
```

## Attributes

Writable: **35** · Read-only: **8**

### Writable

`importsequencenumber`, `msdyn_acilastupdatetimestamp`, `msdyn_averagefirstresponsetimebytheminhrs`, `msdyn_averagefirstresponsetimebyusinhrs`, `msdyn_computationaccuracy`, `msdyn_contactid`, `msdyn_contactkpiitemid`, `msdyn_date`, `msdyn_emailattachmentopens`, `msdyn_emaillinksclicked`, `msdyn_emailsreceived`, `msdyn_emailssent`, `msdyn_facetimewithcustomer`, `msdyn_liemailssent`, `msdyn_meetingsreceived`, `msdyn_meetingssent`, `msdyn_name`, `msdyn_numberofopportunities`, `msdyn_openedemails`, `msdyn_phonecallsmade`, `msdyn_phonecallsreceived`, `msdyn_relationshiphealthscorestate`, `msdyn_relationshiphealthscorevalue`, `msdyn_relationshiphealthtrend`, `msdyn_responseratebythem`, `msdyn_responseratebyus`, `msdyn_timespentbycustomer`, `msdyn_timespentbycustomer_calculated`, `msdyn_timespentbyteam`, `msdyn_timespentbyteam_calculated`, `overriddencreatedon`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `organizationid`, `versionnumber`

## Relationships

### Many-to-One (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_contactkpiitem_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_contactkpiitem_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_contactkpiitem_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_contactkpiitem_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_msdyn_contactkpiitem` | [organization](organization.md) | `organizationid` | `organizationid` |
| `msdyn_contact_msdyn_contactkpiitem_contactid` | [contact](contact.md) | `msdyn_contactid` | `msdyn_contactid` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_contactkpiitem_SyncErrors` | [msdyn_contactkpiitem](msdyn_contactkpiitem.md) | `regardingobjectid` | `regardingobjectid_msdyn_contactkpiitem` |
| `msdyn_contactkpiitem_AsyncOperations` | [msdyn_contactkpiitem](msdyn_contactkpiitem.md) | `regardingobjectid` | `regardingobjectid_msdyn_contactkpiitem` |
| `msdyn_contactkpiitem_MailboxTrackingFolders` | [msdyn_contactkpiitem](msdyn_contactkpiitem.md) | `regardingobjectid` | `regardingobjectid_msdyn_contactkpiitem` |
| `msdyn_contactkpiitem_UserEntityInstanceDatas` | [msdyn_contactkpiitem](msdyn_contactkpiitem.md) | `objectid` | `objectid_msdyn_contactkpiitem` |
| `msdyn_contactkpiitem_ProcessSession` | [msdyn_contactkpiitem](msdyn_contactkpiitem.md) | `regardingobjectid` | `regardingobjectid_msdyn_contactkpiitem` |
| `msdyn_contactkpiitem_BulkDeleteFailures` | [msdyn_contactkpiitem](msdyn_contactkpiitem.md) | `regardingobjectid` | `regardingobjectid_msdyn_contactkpiitem` |
| `msdyn_contactkpiitem_PrincipalObjectAttributeAccesses` | [msdyn_contactkpiitem](msdyn_contactkpiitem.md) | `objectid` | `objectid_msdyn_contactkpiitem` |
| `msdyn_msdyn_contactkpiitem_contact_contactkpiid` | [msdyn_contactkpiitem](msdyn_contactkpiitem.md) | `msdyn_contactkpiid` | `msdyn_contactkpiid` |


## Source

Generated from [msdyn_contactkpiitem (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_contactkpiitem')) on 2026-05-07.