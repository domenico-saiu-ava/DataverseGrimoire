---
logical: "msdyn_leadkpiitem"
display: "Elemento KPI lead"
entitySetName: "msdyn_leadkpiitems"
primaryId: "msdyn_leadkpiitemid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Elemento KPI lead

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_leadkpiitem` |
| Display name | Elemento KPI lead |
| Display (plural) | Elementi KPI lead |
| Schema name | `msdyn_leadkpiitem` |
| Entity set (Web API) | `msdyn_leadkpiitems` |
| Primary id attribute | `msdyn_leadkpiitemid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_leadkpiitems?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_leadkpiitems(<guid>)
POST /api/data/v9.2/msdyn_leadkpiitems
PATCH /api/data/v9.2/msdyn_leadkpiitems(<guid>)
DELETE /api/data/v9.2/msdyn_leadkpiitems(<guid>)
```

## Attributes

Writable: **42** · Read-only: **8**

### Writable

`importsequencenumber`, `msdyn_acilastupdatetimestamp`, `msdyn_averagefirstresponsetimebytheminhrs`, `msdyn_averagefirstresponsetimebyusinhrs`, `msdyn_computationaccuracy`, `msdyn_date`, `msdyn_emailattachmentopens`, `msdyn_emaillinksclicked`, `msdyn_emailsreceived`, `msdyn_emailssent`, `msdyn_facetimewithcustomer`, `msdyn_lastactivitybyteam`, `msdyn_lastactivitydirection`, `msdyn_lastactivityid`, `msdyn_lastactivitytype`, `msdyn_leadid`, `msdyn_leadkpiitemid`, `msdyn_liemailssent`, `msdyn_meetingsreceived`, `msdyn_meetingssent`, `msdyn_name`, `msdyn_nextactivitybyteam`, `msdyn_nextactivitydirection`, `msdyn_nextactivityid`, `msdyn_nextactivitytype`, `msdyn_openedemails`, `msdyn_phonecallsmade`, `msdyn_phonecallsreceived`, `msdyn_relationshiphealthscorestate`, `msdyn_relationshiphealthscorevalue`, `msdyn_relationshiphealthtrend`, `msdyn_responseratebythem`, `msdyn_responseratebyus`, `msdyn_timespentbycustomer`, `msdyn_timespentbycustomer_calculated`, `msdyn_timespentbyteam`, `msdyn_timespentbyteam_calculated`, `overriddencreatedon`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `organizationid`, `versionnumber`

## Relationships

### Many-to-One (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_leadkpiitem_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_leadkpiitem_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_leadkpiitem_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_leadkpiitem_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_msdyn_leadkpiitem` | [organization](organization.md) | `organizationid` | `organizationid` |
| `msdyn_lead_msdyn_leadkpiitem_leadid` | [lead](lead.md) | `msdyn_leadid` | `msdyn_leadid` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_leadkpiitem_SyncErrors` | [msdyn_leadkpiitem](msdyn_leadkpiitem.md) | `regardingobjectid` | `regardingobjectid_msdyn_leadkpiitem` |
| `msdyn_leadkpiitem_AsyncOperations` | [msdyn_leadkpiitem](msdyn_leadkpiitem.md) | `regardingobjectid` | `regardingobjectid_msdyn_leadkpiitem` |
| `msdyn_leadkpiitem_MailboxTrackingFolders` | [msdyn_leadkpiitem](msdyn_leadkpiitem.md) | `regardingobjectid` | `regardingobjectid_msdyn_leadkpiitem` |
| `msdyn_leadkpiitem_UserEntityInstanceDatas` | [msdyn_leadkpiitem](msdyn_leadkpiitem.md) | `objectid` | `objectid_msdyn_leadkpiitem` |
| `msdyn_leadkpiitem_ProcessSession` | [msdyn_leadkpiitem](msdyn_leadkpiitem.md) | `regardingobjectid` | `regardingobjectid_msdyn_leadkpiitem` |
| `msdyn_leadkpiitem_BulkDeleteFailures` | [msdyn_leadkpiitem](msdyn_leadkpiitem.md) | `regardingobjectid` | `regardingobjectid_msdyn_leadkpiitem` |
| `msdyn_leadkpiitem_PrincipalObjectAttributeAccesses` | [msdyn_leadkpiitem](msdyn_leadkpiitem.md) | `objectid` | `objectid_msdyn_leadkpiitem` |
| `msdyn_msdyn_leadkpiitem_lead_leadkpiid` | [msdyn_leadkpiitem](msdyn_leadkpiitem.md) | `msdyn_leadkpiid` | `msdyn_leadkpiid` |


## Source

Generated from [msdyn_leadkpiitem (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_leadkpiitem')) on 2026-05-07.